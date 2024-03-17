import { json } from '@sveltejs/kit';

export async function getPosts(page=1, limit=3, tag=null) {
    const rangeStart = (page - 1) * limit;
    const rangeEnd = page * limit;

    const paths = import.meta.glob('/src/blog/*.md', { eager: true });
    let posts = [];
    for (const path in paths) {
        const file = await paths[path];
        const slug = path.split('/').at(-1)?.replace('.md', '');

        const post = {
            slug,
            metadata: file.metadata
        }

        if (post.metadata.published === "true" && (!tag || post.metadata.tags.includes(tag))) {
            posts.push(post);
        }
    }

    posts = posts.sort(function(a, b) {
        return new Date(b.metadata.date) - new Date(a.metadata.date);
    }).slice(rangeStart, rangeEnd);

    const total = Math.ceil(posts.length / limit);

    return json({
        "posts": posts,
        "tags": tag,
        "page": page,
        "total": total,
        "limit": limit,
    });
}

export async function getPhotos(album=null) {
    const paths = import.meta.glob('../../gallery/photos/*.{jpg,jpeg,png,webp,avif}', {
        query: 'url',
        eager: true
    });

    let photos = new Map();
    const files = await Promise.all(Object.values(paths));
    files.forEach((file, i) => {
        const path = Object.keys(paths)[i];
        const name = path.split('/').at(-1)?.split('.').slice(0, -1).join('.');
        const url = file.default;

        photos.set(name, { name, url });
    });

    let albums = await getAlbums();
    if (album) {
        albums = albums.filter(a => a.id === album);
    }

    for (const album of albums) {
        album.photos = album.photos.map(photo => {
            const matchingPhoto = photos.get(photo.name);
            if (matchingPhoto) {
                photo.url = matchingPhoto.url;
            }
            return photo;
        });
    }

    return json({
        "albums": albums,
        "album": album
    });
}

export async function getAlbums() {
    let albums = [];
    const paths = import.meta.glob('../../gallery/*.json', {
        eager: true
    });

    for (const path in paths) {
        const file = await paths[path];
        const id = path.split('/').at(-1)?.split('.').slice(0, -1).join('.');
        const jsonData = file.default;

        const photos = jsonData.photos
            .sort((a, b) => a.order - b.order)
            .map(({ order, ...rest }) => rest);

        const album = {
            order: jsonData.order,
            id: id,
            title: jsonData.title,
            desc: jsonData.desc,
            photos: photos
        }

        albums.push(album);
    }

    albums = albums
        .sort((a, b) => a.order - b.order)
        .map(({ order, ...rest }) => rest);

    return albums;
}
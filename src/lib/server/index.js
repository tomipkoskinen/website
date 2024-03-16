export async function getPosts(tags) {
    tags = tags ?? null;

    let posts = [];

    const paths = import.meta.glob('/src/blog/*.md', { eager: true });

    for (const path in paths) {
        const file = await paths[path];
        const slug = path.split('/').at(-1)?.replace('.md', '');

        const post = {
            slug,
            metadata: file.metadata
        }

        if (post.metadata.published === "true") {
            posts.push(post);
        }
    }

    posts = posts.sort(function(a,b){
        return new Date(b.metadata.date) - new Date(a.metadata.date);
    });

    if (tags) {
        posts = posts.filter(post => post.metadata.tags.includes(tags));
    }

    return posts;
}

export async function getPhotos(album) {
    album = album ?? null;

    let photos = [];
    const paths = import.meta.glob('../../gallery/photos/*.{jpg,jpeg,png,webp,avif}', {
        query: 'url',
        eager: true
    });

    for (const path in paths) {
        const file = await paths[path];
        const name = path.split('/').at(-1)?.split('.').slice(0, -1).join('.');
        const url = file.default;

        const photo = {
            name,
            url
        }

        photos.push(photo);
    }

    let albums = await getAlbums();
    if (album) {
        albums = albums.filter(a => a.id === album);
    }

    for (const album of albums) {
        album.photos = album.photos.map(photo => {
            const matchingPhoto = photos.find(p => p.name === photo.name);
            if (matchingPhoto) {
                photo.url = matchingPhoto.url;
            }
            return photo;
        });
    }

    return albums;
}

export async function getAlbums() {
    let albums = [];
    const paths = import.meta.glob('../../gallery/*.json', {
        eager: true
    });

    for (const path in paths) {
        const file = await paths[path];
        const id = path.split('/').at(-1)?.split('.').slice(0, -1).join('.');
        let jsonData = file.default;
        let photos = jsonData.photos.sort((a, b) => a.order - b.order);
        photos = jsonData.photos.map(photo => {
            const { order, ...rest } = photo;
            return rest;
        });

        const album = {
            order: jsonData.order,
            id: id,
            title: jsonData.title,
            desc: jsonData.desc,
            photos: photos
        }

        albums.push(album);
    }

    albums = albums.sort((a, b) => a.order - b.order);
    albums = albums.map(album => {
        const { order, ...rest } = album;
        return rest;
    });

    return albums;
}
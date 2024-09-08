
# Bini API

This is an API for BINI, a Filipino girl group, providing detailed profiles of its members, album information, and songs categorized by album. All data is referenced from their Wikipedia page: BINI (group). Built with Node.js and MongoDB, the API offers structured access to the group's information.


## API Reference

#### Get all members

```http
  GET /api/members
```

#### Get single member

```http
  GET /api/members/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Enter member name to fetch |


#### Get all albums

```http
  GET /api/albums
```

#### Get single album

```http
  GET /api/albums/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Enter album name to fetch |


#### Get all songs

```http
  GET /api/songs
```

#### Get single song

```http
  GET /api/songs/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. Enter song title to fetch |


## Authors

- [@czedrixb](https://github.com/czedrixb)


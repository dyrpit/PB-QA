# API docs

Api URL:
`https://simple-books-api.glitch.me/`
## Endpoints

- [Status](#status)
- [Books](#books)
  - [Get all books](#get-all-books)
  - [Get single book](#get-single-book)
- [Orders](#orders)
  - [Get all orders](#get-all-orders)
  - [Get single order](#get-single-order)
  - [Create order](#create-order)
  - [Update order](#update-order)
  - [Delete order](#delete-order)
- [Register user](#register-user)

## Status

`GET /status`

Return current API status

## Books

### Get all books

`GET /books`

Returns list of all books

**Parameters**
| Name | Type | In | Required | Description |
|------|------|---|----------|---|
| `type` | string | query | No | Specifies book type. It can be one of: fiction, non-fiction. |
| `limit` | integer | query | No | Specifies number of results you want per request. |

### Get single book

`GET /books/:id`

Returns single book

**Parameters**
| Name | Type | In | Required | Description |
|------|------|---|----------|---|
| `id` | integer | path | Yes | Specifies book id you want to get.|

## Orders

### Get all orders

`GET /orders`

Returns all books orders for given user.

**Parameters**
| Name | Type | In | Required | Description |
|------|------|---|----------|---|
| `Authorization` | string | header | Yes | Specifies the bearer token of the API client.|
| `limit` | integer | query | No | Specifies number of results you want per request.|

### Get single order

`GET /orders/:id`

Returns single order for given user.

**Parameters**
| Name | Type | In | Required | Description |
|------|------|---|----------|---|
| `Authorization` | string | header | Yes | Specifies the bearer token of the API client.|
| `id` | string | path | Yes | Specifies order id you want to get.|

### Create order

`POST /orders`

Create new order.

**Parameters**
| Name | Type | In | Required | Description |
|------|------|---|----------|---|
| `Authorization` | string | header | Yes | Specifies the bearer token of the API client.|

**Body**

```
{
	"bookId": 1,
	"customerName": "Customer name"
}
```

### Update order

`PATCH /orders/:id`

Update existing order.

**Parameters**
| Name | Type | In | Required | Description |
|------|------|---|----------|---|
| `Authorization` | string | header | Yes | Specifies the bearer token of the API client.|
| `id` | string | path | Yes | Specifies order id you want to update.|

**Body**

```
{
	"customerName": "Customer new name"
}
```

### Delete order

`PATCH /orders/:id`

Delete existing order.

**Parameters**
| Name | Type | In | Required | Description |
|------|------|---|----------|---|
| `Authorization` | string | header | Yes | Specifies the bearer token of the API client.|
| `id` | string | path | Yes | Specifies order id you want to delete.|

**Body**

```
{
	"customerName": "Customer new name"
}
```

## Register user

`POST /api-clients`

Create new user.

**Body**

```
{
	"clientName": "Client name",
	"clientEmail": "Client email"
}
```

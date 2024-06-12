# http-messages-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a client?

a client is a service requester

- What is a server?

a server is the provider of a resource

- Which HTTP method does a browser issue to a web server when you visit a URL?

the get method

- What three things are on the start-line of an HTTP **request** message?

An HTTP method (get, post, patch, etc), the request target, http version

- What three things are on the start-line of an HTTP **response** message?

The HTTP version, the error code, and the text description of the code

- What are HTTP headers?

A field of an HTTP request that contains additional metadata about the request or response

- Where would you go if you wanted to learn more about a specific HTTP Header?

check the MDN docs

- Is a body required for a valid HTTP request or response message?

No its not required. Get requests don't typically need them. Some responses also don't necessarily need them if the status code serves as a sufficient description of the response.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```

export default {
  title: "Series",
  name: "series",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string"
    },
    {
      title: "Description",
      name: "description",
      type: "string"
    },
    {
      title: "Category",
      name: "category",
      type: "reference",
      to: [{type: "category"}]
    },
    {
      title: "Photos",
      name: "photos",
      type: "array",
      of: [{ type: "photo"}]
    }
  ]
}

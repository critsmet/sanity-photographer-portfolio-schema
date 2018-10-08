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
      title: "Photos",
      name: "photos",
      type: "array",
      of: [{ type: "photo"}]
    },
    {
      title: "Category",
      name: "category",
      type: "string",
      options: {
        list: [
          { title: "Commision", value: "commision" },
          { title: "Personal", value: "personal" }
        ],
        layout: "radio"
      }
    }
  ]
}

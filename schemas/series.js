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
      titles: "Display Photos",
      name: "display_photos",
      type: "array",
      of: [{ type: "photo"}],
      validation: Rule => Rule.required().max(3)
    },
    {
      title: "All Photos",
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
          { title: "Commission", value: "Commission" },
          { title: "Personal", value: "Personal" },
          { title: "Other", value: "Other"}
        ],
        layout: "radio"
      }
    }
  ]
}

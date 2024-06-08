// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: "pet",
    type: "document",
    title: "Pet",
    fields: [
      {
        name: "pname",
        type: "string",
        title: "Name of a Pet"
      },
      {
        name: "description",
        type: "text",
        title: "Description"
      },
      {
          name: "image",
          type: "image",
          title: "Image"
        }
    ]
  }
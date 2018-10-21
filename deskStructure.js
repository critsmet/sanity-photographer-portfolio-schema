import S from "@sanity/desk-tool/structure-builder"

export default () =>
S.list()
  .title("Content")
  .items([
    S.listItem()
      .title("Series")
      .child(
        S.documentTypeList('series')
      ),
    S.listItem()
      .title("Images")
      .child(
        S.documentTypeList('sanity.imageAsset')
      )
    ])

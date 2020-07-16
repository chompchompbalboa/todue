export interface IAllTags { [tagId: string]: ITag }

export interface ITag {
  id: string
  text: string
  backgroundColor: string
}
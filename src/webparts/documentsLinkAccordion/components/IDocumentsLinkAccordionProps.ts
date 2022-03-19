import { IReadonlyTheme } from "@microsoft/sp-component-base";

export interface IDocumentsLinkAccordionProps {
  title: string;
  listId:string;
  listBaseTemplate:number;
  fieldName:string;
  locale:string;
  themeVariant: IReadonlyTheme | undefined;
  onConfigure: () => void;
}

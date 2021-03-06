import { Nav, INavStyles, INavLinkGroup } from 'office-ui-fabric-react/lib/Nav';
export interface IDocumentsLinksAccordionState {
    navLinkGroups: INavLinkGroup[];
    isLoading: boolean;
    hasError:boolean;
    errorMessage:string;
    listName:string;  
  }
// import directives
import { CoDeckManager } from './coDeckManager/coDeckManager';
import { CoDeckList } from './coDeckManager/coDeckList/coDeckList';
import { CoNewDeck } from './coDeckManager/coNewDeck/coNewDeck';

// re-export directives
const deckManagerDirectives:any[] = [
    CoDeckManager, CoDeckList, CoNewDeck
];

export default deckManagerDirectives;
export { CoDeckManager };

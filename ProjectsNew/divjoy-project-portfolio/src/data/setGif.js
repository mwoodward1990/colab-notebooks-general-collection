import todo from './todo-gif.gif'
import simple from './anyeats.gif'
import salon from './salon-shop-gif.gif'
import shopiforce from './shopiforce-connector.gif'

export default function useGif(props){
    let gif = null;

    if (props === 'todo'){
      gif = todo;
    } else if (props === "simple") {
      gif = simple;
    } else if (props === "salon") {
      gif = salon;
    } else if (props === "coffee") {
      gif = null;
    } else if (props === "college") {
      gif = null;
    } else if (props === "shopiforce-connector") {
      gif = shopiforce;
    }

    return gif;
}
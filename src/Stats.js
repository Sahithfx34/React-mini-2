export function Stats({item}){
    if(item.length === 0){
      return(
        <footer className="stats">
          <em>Start adding some items to your packing list🚀</em>
        </footer>
      );
    }
    const numItems = item.length;
    const alreadyPack = item.filter((item)=> item.packed).length;
    const percentage = Math.round((alreadyPack/numItems)*100)
    return(
      <footer className="stats">
        {percentage === 100 ? "You got everything! Ready to go✈️": `You have ${numItems} items on your list, and you already packed ${alreadyPack} (${percentage} %)`}
      </footer>
    );
  }
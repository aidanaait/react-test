import Color from './color'
const ColorList = ({colors=[], onRemoveColor=f=>f, onRateStars}) => {
    console.log(colors)
    return ( <div>
        {colors.map((color,index)=>(
            <Color
            key={color.id}
            {...color}
            onRemove={onRemoveColor}
            onRateStar = {onRateStars}
            />
        ))}
    </div> );
}
 
export default ColorList;
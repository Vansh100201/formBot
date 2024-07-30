// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../../style/Workspace/Flow.css";
import start from "../../assets/Workspace/Flow/start.png";
import deleteLogo from "../../assets/Workspace/Flow/delete.png";
import textBubble from "../../assets/Workspace/Flow/Bubbles/text.png";
import image from "../../assets/Workspace/Flow/Bubbles/image.png";
import video from "../../assets/Workspace/Flow/Bubbles/video.png";
import gif from "../../assets/Workspace/Flow/Bubbles/gif.png";
import textInput from "../../assets/Workspace/Flow/Inputs/text.png";
import numberInput from "../../assets/Workspace/Flow/Inputs/number.png";
import emailInput from "../../assets/Workspace/Flow/Inputs/email.png";
import phoneInput from "../../assets/Workspace/Flow/Inputs/phone.png";
import dateInput from "../../assets/Workspace/Flow/Inputs/date.png";
import ratingInput from "../../assets/Workspace/Flow/Inputs/rating.png";
import buttonInput from "../../assets/Workspace/Flow/Inputs/button.png";
function Flow() {
const [dynamicItems, setDynamicItems] = useState([]);
const [itemCounts, setItemCounts] = useState({
text: 0,
image: 0,
video: 0,
gif: 0,
textInput: 0,
numberInput: 0,
emailInput: 0,
phoneInput: 0,
dateInput: 0,
rateInput: 0,
buttonInput: 0,
});
const handleAddItem = (type, src, placeholder) => {
const newId = itemCounts[type] + 1;
setDynamicItems([
...dynamicItems,
{ id: `${type}-${newId}`, type, src, placeholder },
]);
setItemCounts((prevCounts) => ({
...prevCounts,
[type]: newId,
}));
};
const handleDeleteItem = (id) => {
setDynamicItems(dynamicItems.filter((item) => item.id !== id));
};
return (
<div className="flow">
<div className="flow-items">
<div className="flow-container">
<div className="sub-header sub-header-bubbles">Bubbles</div>
<div className="bubbles">
<div
className="bubble"
onClick={() =>
handleAddItem("text", textBubble, "Click here to edit")
}
>
<img src={textBubble} alt="Text Bubble" />
Text
</div>
<div
className="bubble"
onClick={() => handleAddItem("image", image, "Click to add link")}
>
<img src={image} alt="Images Bubble" />
Image
</div>
<div
className="bubble"
onClick={() => handleAddItem("video", video, "Click to add link")}
>
<img src={video} alt="Video Bubble" />
Video
</div>
<div
className="bubble"
onClick={() => handleAddItem("gif", gif, "Click to add link")}
>
<img src={gif} alt="GIF Bubble" />
GIF
</div>
</div>
<div className="sub-header">Inputs</div>
<div className="bubbles">
<div
className="bubble"
onClick={() =>
handleAddItem(
"textInput",
textInput,
"Hint: User will input text on the form"
)
}
>
<img src={textInput} alt="Text Input" />
Text
</div>
<div
className="bubble"
onClick={() =>
handleAddItem(
"numberInput",
numberInput,
"Hint: User will input a number on the form"
)
}
>
<img src={numberInput} alt="Number Input" />
Number
</div>
<div
className="bubble"
onClick={() =>
handleAddItem(
"emailInput",
emailInput,
"Hint: User will input an email on the form"
)
}
>
<img src={emailInput} alt="Email Input" />
Email
</div>
<div
className="bubble"
onClick={() =>
handleAddItem(
"phoneInput",
phoneInput,
"Hint: User will input a phone number on the form"
)
}
>
<img src={phoneInput} alt="Phone Input" />
Phone
</div>
<div
className="bubble"
onClick={() =>
handleAddItem(
"dateInput",
dateInput,
"Hint: User will select a date"
)
}
>
<img src={dateInput} alt="Date Input" />
Date
</div>
<div
className="bubble"
onClick={() =>
handleAddItem(
"rateInput",
ratingInput,
"Hint: User will tap to rate out of 5"
)
}
>
<img src={ratingInput} alt="Rating Input" />
Rating
</div>
<div
className="bubble"
onClick={() => handleAddItem("buttonInput", buttonInput, "")}
>
<img src={buttonInput} alt="Button Input" />
Button
</div>
</div>
</div>
</div>
<div className="flowchart-container">
<div className="start-header">
<img src={start} alt="start" />
Start
</div>
{dynamicItems.map((item) => (
<div className="text-item" key={item.id}>
<img
src={deleteLogo}
alt="delete"
id="deleteId"
onClick={() => handleDeleteItem(item.id)}
/>
<div className="item-header">
{item.type === "text"
? `Text ${item.id.split("-")[1]}`
: item.type === "image"
? `Image ${item.id.split("-")[1]}`
: item.type === "video"
? `Video ${item.id.split("-")[1]}`
: item.type === "gif"
? `GIF ${item.id.split("-")[1]}`
: item.type === "textInput"
? `Input Text ${item.id.split("-")[1]}`
: item.type === "numberInput"
? `Input Number ${item.id.split("-")[1]}`
: item.type === "emailInput"
? `Input Email ${item.id.split("-")[1]}`
: item.type === "phoneInput"
? `Input Phone ${item.id.split("-")[1]}`
: item.type === "dateInput"
? `Input Date ${item.id.split("-")[1]}`
: item.type === "rateInput"
? `Input Rate ${item.id.split("-")[1]}`
: item.type === "buttonInput"
? `Input Button ${item.id.split("-")[1]}`
: "Unknown"}
</div>
<div className="item-data">
{item.type === "text" ? (
<>
<img src={textBubble} alt="Text Bubble" />
<input type="text" placeholder={item.placeholder} />
</>
) : item.type === "image" ? (
<>
<img src={item.src} alt="Images Item" />
<input type="text" placeholder={item.placeholder} />
</>
) : item.type === "video" ? (
<>
<img src={item.src} alt="Video Item" />
<input type="text" placeholder={item.placeholder} />
</>
) : item.type === "gif" ? (
<>
<img src={item.src} alt="GIF Item" />
<input type="text" placeholder={item.placeholder} />
</>
) : item.type === "textInput" ? (
<>
<img src={item.src} alt="Text Input" />
<input type="text" placeholder={item.placeholder} disabled />
</>
) : item.type === "numberInput" ? (
<>
<img src={item.src} alt="Number Input" />
<input
type="number"
placeholder={item.placeholder}
disabled
/>
</>
) : item.type === "emailInput" ? (
<>
<img src={item.src} alt="Email Input" />
<input type="email" placeholder={item.placeholder} disabled />
</>
) : item.type === "phoneInput" ? (
<>
<img src={item.src} alt="Phone Input" />
<input type="tel" placeholder={item.placeholder} disabled />
</>
) : item.type === "dateInput" ? (
<>
<img src={item.src} alt="Date Input" />
<input type="text" placeholder={item.placeholder} disabled />
</>
) : item.type === "rateInput" ? (
<>
<img src={item.src} alt="Rating Input" />
<input type="text" placeholder={item.placeholder} disabled />
</>
) : item.type === "buttonInput" ? (
<>
<img src={item.src} alt="Button Input" />
<input
type="button"
placeholder={item.placeholder}
disabled
/>
</>
) : (
<div>Unknown Item Type</div>
)}
</div>
</div>
))}
</div>
</div>
);
}
export default Flow;
DYNAMIC FORM

pages/index.js

• componentDIdMount will fetch local data located in localStorage (data/rooms.js).
• parsedData will be passed down to the Parent component through ‘peter’ attribute.


components/parent.js

• if there is data in localStorage, state will be updated using its props.
• if the state has a ‘checked’ value, check=true attribute along with a 'child to parent' callback function and data will be passed down to all the child components (room1, room2, room3, room4).
• select onChange event will fire 2 functions. example: functionOneAdult will set state in accordance with select[option] and pass component data back to the parent component. example: functionTwoAdult will set new select value.
• when submit button is clicked state will be stingified and put into localStorage.
• functions room1Value, room2Value, room3Value, room4Value will update the state according to data received back from child components.
• functions room1Value, room2Value, room3Value, room4Value controls which room will be ‘checked’.


components/(room1.js, room2.js, room3.js, room4.js)

• state will be updated if there is data passed down as props.
• all child components will return content that includes the heading, select fields, and checkboxes for room2, room3, and room4.
• if the component’s check value is true it will return jsx with select options enabled. if the component’s check value is false it will return jsx with select options disabled.
• if component receives props from localStorage (room1) select tag value will be set to the value of the props. (room2, room3, room4) select[option] will be set to set to ‘selected’ using React.Fragments.

added clear button to wipe data on localStorage
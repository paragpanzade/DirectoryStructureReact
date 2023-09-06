import './InputBox.css'

const InputBox = (props) => {
    return (
        <div className="InputDiv">
            <input type="text" placeholder="To Create File/Folder, Enter Name" id="InputBox" value={props.name} onChange={(event) => {
                props.setName(event.target.value);
            }}
            />

        </div>

    );
};

export default InputBox
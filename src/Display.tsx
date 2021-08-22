type DisplayProps = {
    display: string
};

function Display(props: DisplayProps) {
    return (
        <div id="display">{props.display}</div>
    );
}

export default Display;
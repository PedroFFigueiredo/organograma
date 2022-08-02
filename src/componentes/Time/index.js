import './Time.css';

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria }
    const cssTwo = { borderColor: props.corPrimaria }

    return (
        <section className="time" style={css}>
            <h3 style={cssTwo}>{props.nome}</h3>
        </section>
    )
}

export default Time;
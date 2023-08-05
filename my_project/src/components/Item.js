import PropTypes from 'prop-types'

function Item ({ marca, ano_lancamento }) {
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: "Faltou a marca",
    ano_lancamento: 0
}

// obs: o `isRequired` já é preenchido quando se tem um valor default

export default Item
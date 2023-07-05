import './footer.css'

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="footer">
            Footer © {year}
        </div>
    )
}

export default Footer
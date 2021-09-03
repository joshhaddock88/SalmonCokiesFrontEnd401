function Footer() {
    return (
        <>
            <footer>
                <div id="footer">&copy; 2021 Pat's Salmon Cookies Inc.</div>
                <div>{props.reports.length} Locations World Wide</div>
            </footer>
        </>
    )
}

export default Footer;
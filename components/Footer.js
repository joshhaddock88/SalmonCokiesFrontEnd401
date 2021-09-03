function Footer(props) {
    return (
        <>
            <footer>
                <div class="footerText">&copy; 2021 Pat's Salmon Cookies Inc.</div>
                <div class="footerText">{props.stores.length} Locations World Wide</div>
            </footer>
        </>
    )
}

export default Footer;
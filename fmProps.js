export function loadFmProps() {
    let props = '##PROPSPLACEHOLDER##'
    const metaDevUrl = document.querySelector('meta[dev-url]').getAttribute('dev-url');

    if (window.location.href.includes(metaDevUrl)) {
        // We are in development mode
        const urlParams = new URLSearchParams(window.location.search);
        props = JSON.parse(urlParams.get('props') || '{}');
    } else {
        // We are in production mode try getting the merged props

        if (props === "##PROPSPLACEHOLDER##") { // Use double quotes here so we can use single quotes for the merge
            props = {}; // Then we have not provided any props
        } else {
            if (typeof props !== 'object') {
                console.log(props);;
                alert('An error occurred while initiating the layout:');
            }
        }
    }

    window.__FMPROPS__ = props;
    return props;
}

export function getFmProps() {
    return window.__PROPS__;
}
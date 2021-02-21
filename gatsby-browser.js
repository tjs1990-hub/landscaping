/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import './src/globalCss/global.css'
export const shouldUpdateScroll = ({
    routerProps: { location },
    getSavedScrollPosition
}) => {
    const currentPosition = getSavedScrollPosition(location)
    // const queriedPosition = getSavedScrollPosition({ pathname: `/random` })
    console.log("shouldUpdateScroll", location);

    window.scroll(...(currentPosition || [0, 0]), { behavior: 'smooth' })

    return false
}
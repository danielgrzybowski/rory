const onlineVisitUrl = 'https://start.ro.co/rory/vaginal-dryness/online-visit/';

function generateUrl(pageNumber) {
    return onlineVisitUrl + pageNumber;
}

module.exports = {generateUrl};
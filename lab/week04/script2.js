function Run () {

    console.log(theJSON) ;
    coordinates = theJSON.data

    var TopLeft = MaxLatMinLong (coordinates) ;
    var TopRight = MaxLatMaxLong (coordinates) ;
    var BottomLeft = MinLatMinLong (coordinates) ;
    var BottomRight = MinLatMaxLong (coordinates) ;
    var BoundingBox =
    {
        topLeft: findTopLeft,
        topRight: findTopRight,
        bottomLeft: findBottomLeft,
        bottomRight: findBottomRight,

    }

    console.log("Bounding box computed for nkx629@tamu.edu: ") ;
    console.log(BoundingBox) ;

}

function MaxLatMinLong(PointsList) {
    var findTopLeft;
    PointsList.forEach(element =>
        {
            if (findTopLeft == null) {
                findTopLeft = element;

            }

            else {
                if (element.lat <TopLeft.lat && element.lon> TopLeft.lon) {
                    findTopLeft = element
                }
            }
        }
        );
        return findTopLeft;
}

function MaxLatMaxLong (PointsList) {
    var findTopRight;
    PointsList.forEach (element =>
        {
            if (findTopRight == null) {
                findTopRight = element;
            }
            else {
                if (element.lat <TopRight.lat && element.lon> TopRight.lon) {
                    findTopRight = element
                }
            }
        }
    );
    return findTopRight;
}

function MinLatMinLong (PointsList) {
    var findBottomLeft;
    PointsList.forEach(element =>
    {
        if (findBottomLeft == null) {
            findBottomLeft = element;
        }
        else {
            if (element.lat <BottomLeft.lat && element.lon> BottomLeft.lon) {
                findBottomLeft = element
            }
        }
    }
    );
    return findBottomLeft;
}

function MinLatMaxLong (PointsList) {
    var findBottomRight;
    PointsList.forEach(element =>
        {
            if (findBottomRight == null) {
                findBottomRight = element;
            }
            else {
                if (element.lat <BottomRight.lat && element.lon> BottomRight.lon) {
                    findBottomRight =element
                }
            }
        }
        );
        return findBottomRight; 
}
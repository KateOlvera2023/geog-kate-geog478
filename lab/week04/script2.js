function Run () {

    console.log(theJSON) ;
    var coordinates = theJSON.data;
    var TopLeft = MaxLatMinLong (coordinates) ;
    var TopRight = MaxLatMaxLong (coordinates) ;
    var BottomLeft = MinLatMinLong (coordinates) ;
    var BottomRight = MinLatMaxLong (coordinates) ;
    var BoundingBox =

    {
        TopLeft: TopLeft,
        TopRight: TopRight,
        bottomLeft: BottomLeft,
        bottomRight: BottomRight,

    }

    console.log("Bounding box computed for nkx629@tamu.edu: ") ;
    console.log(BoundingBox) ;

}

function MaxLatMinLong(PointsList) {
    var TopLeft;
    PointsList.forEach(element =>
        {
            if (TopLeft == null) {
                TopLeft = element;

            }

            else {
                if (element.lat <TopLeft.lat && element.lon> TopLeft.lon) {
                    TopLeft = element
                }
            }
        }
        );
        return TopLeft;
}

function MaxLatMaxLong (PointsList) {
    var TopRight;
    PointsList.forEach (element =>
        {
            if (TopRight == null) {
                TopRight = element;
            }
            else {
                if (element.lat <TopRight.lat && element.lon> TopRight.lon) {
                    TopRight = element
                }
            }
        }
    );
    return TopRight;
}

function MinLatMinLong (PointsList) {
    var BottomLeft;
    PointsList.forEach(element =>
    {
        if (BottomLeft == null) {
            BottomLeft = element;
        }
        else {
            if (element.lat <BottomLeft.lat && element.lon> BottomLeft.lon) {
                BottomLeft = element
            }
        }
    }
    );
    returnBottomLeft;
}

function MinLatMaxLong (PointsList) {
    var BottomRight;
    PointsList.forEach(element =>
        {
            if (BottomRight == null) {
                BottomRight = element;
            }
            else {
                if (element.lat <BottomRight.lat && element.lon> BottomRight.lon) {
                    BottomRight =element
                }
            }
        }
        );
        return BottomRight; 
}
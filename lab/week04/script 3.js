function Run () {
    console.log(theJSON);
     var coordinates = theJSON.data;
     var topleft = MaxLatMinLong(coordinates);
     var topright = MaxLatMaxLong(coordinates);
     var bottomleft = MinLatMinLong(coordinates);
     var bottomright = MinLatMaxLong(coordinates);
     var BoundingBox =
     {
     topLeft: topleft,
     topRight: topright,
     bottomLeft: bottomleft,
     bottomRight: bottomright,
    
     }
    
     console.log("Bounding box computed for nkx629@tamu.edu: ");
     console.log(BoundingBox);
     }
    
    function MaxLatMinLong(PointsList) {

     var TopLeft;

     PointsList.forEach(element =>

     {

     if (topleft == null) {
        topleft = element;
     }

     else {
     if (element.lat<topleft.lat &a& element.lon>topleft.lon) {
        topleft = element
     }

     }

     }

     );

     return topleft;

    }
    function MaxLatMaxLong(PointsList) {
    var topright;
     PointsList.forEach(element =>
     {
     if (topright == null) {
     topright = element;
     }
    
     else {
     if (element.lat &gt; topright.lat &amp;&amp; element.lon &gt; topright.lon) {
     topRight = element
     }
     }
     }
     );
     return topright;
    }


    function MinLatMinLong(PointsList) {

     var bottomleft;
     PointsList.forEach(element =>

     {

         if (bottomLeft == null) {
             bottomLeft = element;
     }

     else {
        if (element.lat<BottomLeft.lat && element.lon<bottomLeft.lon) {
            BottomLeft = element
            }
     
        }
     }
     
     );
     return bottomLeft;
    }

    function MinLatMaxLong(PointsList) {
     var bottomRight;
     PointsList.forEach(element =>

     {
     if (bottomright == null) {
     bottomright = element;
     }
     else {
        if (element.lat>bottomright.lat && element.lon <bottomright.lon) {
            bottomright = element
            }
        }
     }

     );
     return bottomright;
    }
//TSP_Local Search

function tsp_ls(matrix) {
    let len = matrix.length;

    route = generateRandomRoute(len);

    var exploration = true;
    while (exploration) {
        exploration = false;
        for (let i = 0; i < len - 1; i++) {
            for (let k = i + 1; k < len; k++) {
                let newRoute = TwoOptSwap(route, i, k);
                if (evaluateRoute(newRoute, matrix) < evaluateRoute(route, matrix)) {
                    route = newRoute;
                    exploration = true;
                }
            }
        }
    }

    return evaluateRoute(route, matrix);
    
    function TwoOptSwap(route, i, k) {
        let segment = route.slice(i, k + 1);
        let enhancedSegment = Enhancement(segment);
        return route.slice(0, i).concat(enhancedSegment).concat(route.slice(k + 1));
    }
    function evaluateRoute(route, matrix) {
        let evaluation = 0;
        for (let i = 0; i < route.length - 1; i++) {
            evaluation += matrix[route[i]][route[i + 1]];
        }
        return evaluation;
    }

    function Enhancement(segment) {
        return segment.reverse();
    }

    function generateRandomRoute(length) {
        let randomRoute = Array.from(Array(length).keys());
        return randomRoute;
    }
}





//TSP_HeldKarp

function tsp_hk(distance_matrix) {
    if (distance_matrix.length <= 1) {
        return 0;
    }
    // Resets cache every time the function is called
    let cache = {};

    let cities = Array.from({ length: distance_matrix.length }, (_, i) => i);

    let minTourLength = Infinity;

    // Loop through the matrix to find the shortest path
    for (let start = 0; start < cities.length; start++) {
        let tourLength = heldKarp(distance_matrix, start, cities, cache);
        minTourLength = Math.min(minTourLength, tourLength);
    }

    return minTourLength === Infinity ? 0 : minTourLength;
}

function heldKarp(dm, start, cities, cache) {
    let key = JSON.stringify([cities, start]);

    // Check if already in the cache
    if (cache[key] !== undefined) {
        return cache[key];
    }

    if (cities.length === 2) {
        cache[key] = dm[cities[0]][cities[1]];
        return cache[key];
    } else {
        let minimum = Infinity;

        for (let i = 0; i < cities.length; i++) {
            let city = cities[i];

            if (city !== start) {
                let newCities = cities.filter(city => city !== start);
                let newMin = heldKarp(dm, city, newCities, cache) + dm[start][city];

                minimum = Math.min(minimum, newMin);
            }
        }

        cache[key] = minimum;
        return minimum;
    }
}



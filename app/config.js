define([], function () {
    return {
        portalUrl: "https://learn-students.maps.arcgis.com/",
        itemId: "68b98f68d83e4745862786235d2805b1",
        buildingLayerTitle: "CatastrosTopografiaDist10",
        heightField: "altura",
        usageField: "currentUse",
        yearField: "begin_year",
        timeline: {
            bin: 5,
            minYear: 1900,
            maxYear: 2020
        },
        noDataColor: "white",
        otherColor: "#FFB55A",
        yearClasses: [{
            minYear: 1000,
            maxYear: 1939,
            color: "#440154",
            label: "<1940"
        }, {
            minYear: 1940,
            maxYear: 1960,
            color: "#404387",
            label: "1940 - 1960"
        }, {
            minYear: 1961,
            maxYear: 1967,
            color: "#29788E",
            label: "1961 - 1967"
        }, {
            minYear: 1968,
            maxYear: 1983,
            color: "#22A884",
            label: "1968 - 1983"
        }, {
            minYear: 1984,
            maxYear: 2000,
            color: "#7AD251",
            label: "1984 - 2000"
        }, {
            minYear: 2001,
            maxYear: 2020,
            color: "#FDE725",
            label: "2001 - 2020"
        }],
        heightVariable: {
            stops: [
                {value: 10, color: "#e0ecf4", label: "< 10m"},
                {value: 70, color: "#8856a7", label: "> 70m"}
            ],
            binSize: 10
        },
        usageValues: [{
            value: "4_3_publicServices",
            color: "#FD7F6F",
            label: "Públicos"
        }, {
            value: "1_residential",
            color: "#7EB0D5",
            label: "Residencial"
        }, {
            value: "3_industrial",
            color: "#BD7EBE",
            label: "Industrial"
        }, {
            value: "4_1_office",
            color: "#B2E061",
            label: "Oficina"
        }]
    }
});

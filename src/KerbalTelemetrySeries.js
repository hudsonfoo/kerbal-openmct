/*global define*/

define(
    function () {
        "use strict";

        function KerbalTelemetrySeries(data) {
            return {
                getPointCount: function () {
                    return data.length;
                },
                getDomainValue: function (index, key) {
                    if (!key) { key = 'timestamp'; }
                    return (data[index] || {})[key];
                },
                getRangeValue: function (index) {
                    return (data[index] || {}).value;
                }
            };
        }

        return KerbalTelemetrySeries;
    }
);
(function(module) {
try {
  module = angular.module('ionic-datepicker.templates');
} catch (e) {
  module = angular.module('ionic-datepicker.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('date-picker-modal.html',
    '<div class="bar bar-header bar-balanced"><div class=title>{{selectedDate | date: \'EEEE\'}}</div></div><div class="row center balanced-light"><div class=col><div class=month>{{selectedDate | date: \'MMM\' | uppercase}}</div><div class=day-of-month>{{selectedDate | date: \'dd\'}}</div><div class=year>{{selectedDate | date: \'yyyy\'}}</div></div></div><div class="row center"><div class="col bold" ng-repeat="dayOfWeek in daysOfWeek track by $index">{{dayOfWeek}}</div></div><div class="row center" ng-repeat="row in rows track by $index"><div class="col no-padding" ng-repeat="col in cols track by $index" ng-class="{\'date-col\': (dayList[$parent.$index * numColumns + $index] != undefined), \'selected-date\': isSelected(dayList[$parent.$index * numColumns + $index]), \'today\' : isToday(dayList[$parent.$index * numColumns + $index]) }"><div class=date-cell ng-click="selectDate(dayList[$parent.$index * numColumns + $index])">{{ dayList[$parent.$index * numColumns + $index] | date: \'d\' }}</div></div></div>');
}]);
})();

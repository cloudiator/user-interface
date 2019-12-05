export var VirtualMachine;
(function (VirtualMachine) {
    VirtualMachine.StateEnum = {
        RUNNING: 'RUNNING',
        ERROR: 'ERROR'
    };
})(VirtualMachine || (VirtualMachine = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVhbE1hY2hpbmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbG91ZGlhdG9yLXJlc3QtYXBpLyIsInNvdXJjZXMiOlsibW9kZWwvdmlydHVhbE1hY2hpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJBLE1BQU0sS0FBVyxjQUFjLENBTTlCO0FBTkQsV0FBaUIsY0FBYztJQUVkLHdCQUFTLEdBQUc7UUFDckIsT0FBTyxFQUFFLFNBQXNCO1FBQy9CLEtBQUssRUFBRSxPQUFvQjtLQUM5QixDQUFDO0FBQ04sQ0FBQyxFQU5nQixjQUFjLEtBQWQsY0FBYyxRQU05QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDbG91ZGlhdG9yIFJFU1QgQXBpXHJcbiAqIE5vIGRlc2NyaXB0aW9uIHByb3ZpZGVkIChnZW5lcmF0ZWQgYnkgU3dhZ2dlciBDb2RlZ2VuIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2FnZ2VyLWFwaS9zd2FnZ2VyLWNvZGVnZW4pXHJcbiAqXHJcbiAqIE9wZW5BUEkgc3BlYyB2ZXJzaW9uOiAwLjIuMFxyXG4gKiBDb250YWN0OiBkYW5pZWwuYmF1ckB1bmktdWxtLmRlXHJcbiAqXHJcbiAqIE5PVEU6IFRoaXMgY2xhc3MgaXMgYXV0byBnZW5lcmF0ZWQgYnkgdGhlIHN3YWdnZXIgY29kZSBnZW5lcmF0b3IgcHJvZ3JhbS5cclxuICogaHR0cHM6Ly9naXRodWIuY29tL3N3YWdnZXItYXBpL3N3YWdnZXItY29kZWdlbi5naXRcclxuICogRG8gbm90IGVkaXQgdGhlIGNsYXNzIG1hbnVhbGx5LlxyXG4gKi9cclxuaW1wb3J0IHsgSGFyZHdhcmUgfSBmcm9tICcuL2hhcmR3YXJlJztcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICcuL2ltYWdlJztcclxuaW1wb3J0IHsgSXBBZGRyZXNzIH0gZnJvbSAnLi9pcEFkZHJlc3MnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJy4vbG9jYXRpb24nO1xyXG5pbXBvcnQgeyBMb2dpbkNyZWRlbnRpYWwgfSBmcm9tICcuL2xvZ2luQ3JlZGVudGlhbCc7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBWaXJ0dWFsTWFjaGluZSB7IFxyXG4gICAgaW1hZ2U/OiBJbWFnZTtcclxuICAgIGhhcmR3YXJlPzogSGFyZHdhcmU7XHJcbiAgICBsb2NhdGlvbj86IExvY2F0aW9uO1xyXG4gICAgaWQ/OiBzdHJpbmc7XHJcbiAgICBpcGFkZHJlc3Nlcz86IEFycmF5PElwQWRkcmVzcz47XHJcbiAgICBsb2dpbmNyZWRlbnRpYWw/OiBMb2dpbkNyZWRlbnRpYWw7XHJcbiAgICBvd25lcj86IHN0cmluZztcclxuICAgIHN0YXRlPzogVmlydHVhbE1hY2hpbmUuU3RhdGVFbnVtO1xyXG59XHJcbmV4cG9ydCBuYW1lc3BhY2UgVmlydHVhbE1hY2hpbmUge1xyXG4gICAgZXhwb3J0IHR5cGUgU3RhdGVFbnVtID0gJ1JVTk5JTkcnIHwgJ0VSUk9SJztcclxuICAgIGV4cG9ydCBjb25zdCBTdGF0ZUVudW0gPSB7XHJcbiAgICAgICAgUlVOTklORzogJ1JVTk5JTkcnIGFzIFN0YXRlRW51bSxcclxuICAgICAgICBFUlJPUjogJ0VSUk9SJyBhcyBTdGF0ZUVudW1cclxuICAgIH07XHJcbn1cclxuIl19
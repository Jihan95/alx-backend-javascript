import ClassRoom from "../0-classroom.js";
const room = new ClassRoom(10);
test('room intialized correctly', () => {
  expect(room._maxStudentsSize).toBe(10);
});

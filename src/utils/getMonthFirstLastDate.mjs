const now = new Date();
const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
const lastDay = new Date(now.getFullYear(), now.getMonth + 1, 0);
lastDay.setHours(23, 59, 59, 999);

export { firstDay, lastDay };

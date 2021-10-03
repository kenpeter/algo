var reorderLogFiles = function (logs) {
  const w_log = [];
  const d_log = [];

  for (let i = 0; i < logs.length; ++i) {
    // "digi1 12 13 14", "word1 abc abc"
    const c = logs[i].substring(
      logs[i].indexOf(" ") + 1,
      logs[i].indexOf(" ") + 2
    );

    if (isNaN(c)) {
      w_log.push(logs[i]);
    } else {
      d_log.push(logs[i]);
    }
  }

  w_log.sort((a, b) => {
    const a_content = a.substring(a.indexOf(" ") + 1);
    const b_content = b.substring(b.indexOf(" ") + 1);
    const a_id = a.substring(0, a.indexOf(" "));
    const b_id = b.substring(0, b.indexOf(" "));

    // flow down sort compare
    if (a_content.localeCompare(b_content) > 0) {
      return 1;
    } else if (a_content.localeCompare(b_content) < 0) {
      return -1;
    }

    if (a_id.localeCompare(b_id) > 0) {
      return 1;
    } else if (a_id.localeCompare(b_id) < 0) {
      return -1;
    } else {
      return 0;
    }
  });
  return [...w_log, ...d_log]; // only touch w_log
};

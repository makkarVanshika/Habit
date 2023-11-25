function createCalendar(year, month) {
    const calendar = document.getElementById('calendar');

    const date = new Date(year, month - 1, 1);
    const daysInMonth = new Date(year, month, 0).getDate();

    let html = '<table><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>';

    // Add empty cells for previous month's days
    for (let i = 0; i < date.getDay(); i++) {
      html += '<td></td>';
    }

    for (let i = 1; i <= daysInMonth; i++) {
      if (date.getDay() === 0) {
        html += '</tr><tr>';
      }
      html += `<td>${i}</td>`;
      date.setDate(date.getDate() + 1);
    }

    // Add empty cells for remaining days
    if (date.getDay() !== 0) {
      for (let i = date.getDay(); i < 7; i++) {
        html += '<td></td>';
      }
    }

    html += '</tr></table>';
    calendar.innerHTML = html;
  }

  // Call the function with desired year and month (e.g., 2023, 11 for November 2023)
  createCalendar(2023, 11);
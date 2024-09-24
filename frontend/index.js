import { backend } from 'declarations/backend';

// Simulated ESPN API data (replace with actual API call when available)
const mockSchedule = [
  { date: '2024-10-10', time: '19:00', opponent: 'Florida Panthers', channel: 'ESPN' },
  { date: '2024-10-15', time: '20:00', opponent: 'Boston Bruins', channel: 'TNT' },
  { date: '2024-10-20', time: '19:30', opponent: 'Toronto Maple Leafs', channel: 'ESPN+' },
  // Add more games as needed
];

async function fetchSchedule() {
  // In a real scenario, you would fetch data from the ESPN API here
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockSchedule), 1000); // Simulate API delay
  });
}

function displaySchedule(schedule) {
  const container = document.getElementById('schedule-container');
  container.innerHTML = ''; // Clear loading message

  const table = document.createElement('table');
  table.innerHTML = `
    <thead>
      <tr>
        <th>Date</th>
        <th>Time</th>
        <th>Opponent</th>
        <th>TV Channel</th>
      </tr>
    </thead>
    <tbody>
      ${schedule.map(game => `
        <tr>
          <td>${game.date}</td>
          <td>${game.time}</td>
          <td>${game.opponent}</td>
          <td>${game.channel}</td>
        </tr>
      `).join('')}
    </tbody>
  `;

  container.appendChild(table);
}

async function init() {
  try {
    const schedule = await fetchSchedule();
    displaySchedule(schedule);

    // Log visit to the backend
    await backend.logVisit(navigator.userAgent);

    // Get and log total visits
    const totalVisits = await backend.getTotalVisits();
    console.log(`Total visits: ${totalVisits}`);
  } catch (error) {
    console.error('Error fetching schedule:', error);
    document.getElementById('schedule-container').innerHTML = '<p>Error loading schedule. Please try again later.</p>';
  }
}

init();

// Chart.js Campaign Graph

const ctx = document.getElementById('campaignChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Apr 22','Apr 23','Apr 24','Apr 25','Apr 26','Apr 27'],
    datasets: [
      {
        label: 'Ad Spend',
        data: [250,300,280,350,400,420],
        backgroundColor: '#00C2FF'
      },
      {
        label: 'Revenue',
        data: [800,900,850,1200,1500,1700],
        backgroundColor: '#122B40'
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top' }
    }
  }
});
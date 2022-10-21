<script src="https://unpkg.com/mqtt/dist/mqtt.min.js"></script>
const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8)
        const host = 'ws://192.168.50.88:1884/mqtt';
        let client;

const options = {
          keepalive: 60,
          clientId: clientId,
          protocolId: 'MQTT',
          protocolVersion: 4,
          clean: true,
          reconnectPeriod: 1000,
          connectTimeout: 30 * 1000,
          will: {
            topic: 'WillMsg',
            payload: 'Connection Closed abnormally..!',
            qos: 0,
            retain: false
          },
          username: 'mqtt',
          password: 'xxxxx
        }

console.log('Connecting mqtt client')
client = mqtt.connect(host, options);

client.on('error', (err) => {
  console.log('Connection error: ', err)
  client.end()
})

client.on('reconnect', () => {
  console.log('Reconnecting...')
})

client.on('connect', function () {
  console.log('Connected...')
  client.publish("home/livingroom/zoom", "hello world!")
});

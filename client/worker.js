console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
    body: 'Notified by Dario',
    icon: 'https://image.freepik.com/free-vector/cool-banana-character-logo-template_23-2148737085.jpg'
  });
});

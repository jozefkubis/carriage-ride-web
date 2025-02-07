export default function getCurrentDateTime() {
  const now = new Date()
  const date = now.toISOString().split("T")[0] // "YYYY-MM-DD"
  const time = now.toTimeString().split(" ")[0] // "HH:mm:ss"
  return `${date} ${time}` // "YYYY-MM-DD HH:mm:ss"
}

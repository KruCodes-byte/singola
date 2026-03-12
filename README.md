# Singola Soft Power Adventure (Prototype)

เว็บต้นแบบเกมการเรียนรู้ Soft Power จังหวัดสงขลา ตาม requirement ที่กำหนด

## โครงสร้างหน้า
- `index.html` หน้าแรก
- `map.html` หน้าแผนที่จังหวัด
- `district.html` หน้าข้อมูลอำเภอ
- `games.html` ระบบ Mini Games
- `certificate.html` ระบบเกียรติบัตร
- `about.html` หน้าข้อมูลทั่วไป
- `profile.html` หน้าโปรไฟล์

## วิธีรัน
```bash
python3 -m http.server 4173
```
เปิดที่ `http://localhost:4173`

## Supabase
- ตั้งค่า URL/Key ใน `js/supabase.js`
- โครงสร้างตารางตัวอย่างอยู่ใน `supabase/schema.sql`

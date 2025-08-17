# OpenTripPlanner Web Tools

This repository contains two simple web-based tools to assist with trip planning and analysis using [OpenTripPlanner (OTP)](https://www.opentripplanner.org/). 
These tools help researchers and planners evaluate public transport accessibility and trip details based on GTFS and OpenStreetMap data.

## 🔧 Tools Included

### 1. `otp-test.html` — Single Trip Planner
A simple interface to test a single trip by providing:
- Origin & destination coordinates
- Date and time of travel
- Transport mode (WALK, TRANSIT)

Useful for testing OTP endpoints manually.

### 2. `otp-bulk.html` — Batch Trip Summary Tool
Upload a CSV file (`|` pipe-delimited) with multiple trips to:
- Query OTP server for each trip
- Display results in a table
- View summary: distance, duration, walking distance, transfers, waiting time
- Export results as a CSV file
- View raw OTP plan links used per trip

Sample CSV format:
trip_number|trip_state|origin|destination|trip_date|trip_time
1|vic|(145.16087489,-37.96505585)|(145.15275541679594,-37.95154672537084)|2025-04-01|08:00

## 🧭 Hosting & API

Both tools assume the OTP server is running and accessible via:
https://ptplanner.latrobe.edu.au/otp/{state}/plan

Where `{state}` is one of: `vic`, `nsw`, `qld`.

Make sure OTP is running with `--autoScan` mode and has the graphs correctly placed in the `/graphs` directory with folders per state.

## 📁 Files in this Repository

| File | Description |
|------|-------------|
| `index.html` | Landing page for both apps |
| `otp-test.html` | Single trip test tool |
| `otp-bulk.html` | Batch trip summary tool |
| `otp_bulk_sample.csv` | Sample CSV input for batch testing |
| `README.md` | This file |

## ✅ Requirements

- Modern web browser (Chrome, Firefox, Edge)
- Internet access to your OTP endpoint
- Valid GTFS+OSM routing graphs

No backend server is required to run the interface — it’s fully client-side.

## 📢 Attribution & Credits

This tool was built and maintained by **Kiki Adhinugraha**  
Contact: [k.adhinugraha@latrobe.edu.au](mailto:k.adhinugraha@latrobe.edu.au)

### 📚 Data Sources
- **GTFS Feeds**:
  - [Public Transport Victoria (PTV)](https://www.ptv.vic.gov.au/footer/data-and-reporting/datasets/)
  - [Transport for NSW (TfNSW)](https://opendata.transport.nsw.gov.au/)
  - [TransLink QLD](https://translink.com.au/about-translink/open-data)
- **Basemap**: [OpenStreetMap contributors](https://www.openstreetmap.org/copyright)

### 🧠 Technology & Libraries
- **Routing Engine**: [OpenTripPlanner](https://www.opentripplanner.org/)
- **CSV Parser**: [PapaParse](https://www.papaparse.com/)
- **Frontend Support**: [ChatGPT (OpenAI)](https://openai.com/chatgpt)

## 🐞 Report Issues

If you encounter bugs or data issues, please contact:  
📧 [k.adhinugraha@latrobe.edu.au](mailto:k.adhinugraha@latrobe.edu.au)

---

MIT License © 2025 Kiki Adhinugraha

import { FunctionComponent, useState, useCallback } from "react";
import { Autocomplete, TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  const [travelDateTimePickerValue, setTravelDateTimePickerValue] = useState<
    string | null
  >(null);

  const onSearchButtonClick = useCallback(() => {
    // Please sync "Results Page" to the project
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.homepage}>
        <div className={styles.searchContainer}>
          <div className={styles.title}>
            <div
              className={styles.heroTagline}
            >{`Let’s locofy & travel the github world`}</div>
            <div className={styles.heroSubtext}>
              Find the best github destinations and the most locofy stays!
            </div>
          </div>
          <div className={styles.searchForm}>
            <div className={styles.formTitleGroup}>
              <b className={styles.searchFormLabel}>Search github</b>
              <div className={styles.flightOptions}>
                <div className={styles.radio}>
                  <div className={styles.padding}>
                    <img
                      className={styles.radiobuttonuncheckedIcon}
                      alt=""
                      src="/radiobuttonunchecked.svg"
                    />
                  </div>
                  <div className={styles.label}>comeback</div>
                </div>
                <div className={styles.radio}>
                  <div className={styles.padding}>
                    <img
                      className={styles.radiobuttonuncheckedIcon}
                      alt=""
                      src="/radiobuttonchecked.svg"
                    />
                  </div>
                  <div className={styles.label}></div>
                </div>
              </div>
            </div>
            <div className={styles.formInputsRow}>
              <div className={styles.inputsRow}>
                <Autocomplete
                  className={styles.departureAutocomplete}
                  disablePortal
                  options={[
                    "Singapore (SIN)",
                    "Sydney (SYD)",
                    "Siem Reap (REP)",
                    "Shanghai (PVG)",
                    "Sanya (SYX)",
                  ]}
                  renderInput={(params: any) => (
                    <TextField
                      {...params}
                      color="primary"
                      label="Departure"
                      variant="outlined"
                      placeholder=""
                      helperText=""
                    />
                  )}
                  defaultValue="Delhi -  Changi (DEL)"
                  size="medium"
                />
                <Autocomplete
                  className={styles.departureAutocomplete}
                  sx={{ width: "100%" }}
                  disablePortal
                  options={[
                    "Clark (CRK)",
                    "Launceston (LST)",
                    "Kalibo (KLO)",
                    "Colombo CMB",
                    "Melbourne (AVV)",
                    "Los Angeles (LA)",
                  ]}
                  renderInput={(params: any) => (
                    <TextField
                      {...params}
                      color="primary"
                      label="Arrival"
                      variant="outlined"
                      placeholder=""
                      helperText=""
                    />
                  )}
                  defaultValue="GITHUB (GB)"
                  size="medium"
                />
                <div className={styles.departureAutocomplete}>
                  <DatePicker
                    label="Date"
                    value={travelDateTimePickerValue}
                    onChange={(newValue: any) => {
                      setTravelDateTimePickerValue(newValue);
                    }}
                    renderInput={(params: any) => (
                      <TextField
                        {...params}
                        color="primary"
                        variant="outlined"
                        size="medium"
                        renderInput={{ placeholder: "01/05/2022" }}
                        helperText=""
                        fullWidth
                      />
                    )}
                  />
                </div>
              </div>
              <div className={styles.buttonGroup}>
                <button
                  className={styles.searchButton}
                  onClick={onSearchButtonClick}
                >
                  <div className={styles.searchFlights}>SEARCH GITHUB flights</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default Homepage;

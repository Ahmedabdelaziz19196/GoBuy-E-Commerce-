import Grid from "@mui/material/Grid";

export default function LaptopsDetailsLowInfo({ label, value }) {
    return (
        <>
            <Grid size={{ xs: 4, sm: 4, md: 2, lg: 2 }}>
                <p
                    style={{
                        fontWeight: "bold",
                        color: "var(--main-color)",
                        textTransform: "capitalize",
                    }}
                >
                    {label}
                </p>
            </Grid>
            <Grid size={{ xs: 8, sm: 8, md: 10, lg: 10 }}>
                <p
                    style={{
                        wordWrap: "break-word",
                        overflowWrap: "break-word",
                        whiteSpace: "normal",
                        lineHeight: "19px",
                    }}
                >
                    {value}
                </p>
            </Grid>
        </>
    );
}

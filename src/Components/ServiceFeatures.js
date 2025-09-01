import Container from "@mui/material/Container";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssignmentReturnedIcon from "@mui/icons-material/AssignmentReturned";
import SecurityIcon from "@mui/icons-material/Security";
export default function ServiceFeatures() {
    return (
        <div
            style={{
                background: "#e7e7e7",
                width: "100%",
                padding: "50px 0px",
            }}
        >
            <Container
                maxWidth="xl"
                className="d-flex flex-column flex-sm-row justify-content-around align-items-center gap-4 position-relative"
            >
                <div className=" d-flex justify-content-between align-items-center">
                    <div
                        style={{
                            color: "white",
                            backgroundColor: "var(--main-color)",
                            padding: "15px",
                            borderRadius: "50%",
                            marginRight: "10px",
                        }}
                    >
                        <LocalShippingIcon sx={{ fontSize: "30px" }} />
                    </div>
                    <div
                        style={{
                            wordBreak: "break-word",
                            maxWidth: "300px",
                        }}
                    >
                        <p style={{ fontWeight: "bold" }}>
                            Fast and high quality delivery
                        </p>
                        <p>Our company makes delivery all over the country</p>
                    </div>
                </div>
                <div className=" d-flex justify-content-between align-items-center">
                    <div
                        style={{
                            color: "white",
                            backgroundColor: "var(--main-color)",
                            padding: "15px",
                            borderRadius: "50%",
                            marginRight: "10px",
                        }}
                    >
                        <SecurityIcon sx={{ fontSize: "30px" }} />
                    </div>
                    <div
                        style={{
                            wordBreak: "break-word",
                            maxWidth: "300px",
                        }}
                    >
                        <p style={{ fontWeight: "bold" }}>
                            Quality assurance and service{" "}
                        </p>
                        <p>
                            We offer only those goods, in which quality we are
                            sure
                        </p>
                    </div>
                </div>
                <div className=" d-flex justify-content-between align-items-center">
                    <div
                        style={{
                            color: "white",
                            backgroundColor: "var(--main-color)",
                            padding: "15px",
                            borderRadius: "50%",
                            marginRight: "10px",
                        }}
                    >
                        <AssignmentReturnedIcon sx={{ fontSize: "30px" }} />
                    </div>
                    <div
                        style={{
                            wordBreak: "break-word",
                            maxWidth: "300px",
                        }}
                    >
                        <p style={{ fontWeight: "bold" }}>
                            Returns within 14 days
                        </p>
                        <p>You have 14 days to test your purchase</p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

import { Box, Card, CardMedia, Dialog, DialogTitle, Grid, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import Carousel from "react-material-ui-carousel";

function FigureModal(props) {
    return (
        <>
            <Dialog onClose={() => props.onClose?.()} open={props.open} fullWidth maxWidth='md'>
                {/* <DialogTitle>Set backup account</DialogTitle> */}
                <Paper elevation={3}>
                    <Carousel>
                        {
                            props.data?.images.map((image) => {
                                return (
                                    <Card>
                                        <CardMedia sx={{ objectFit: 'contain' }} component='img' height='400' image={image.path} alt={image.name} />
                                    </Card>
                                )
                            })
                        }
                    </Carousel>
                </Paper>
                <TableContainer>
                    <Table size="small">
                        <TableBody>
                            {
                                props.data?.data?.map((data) => {
                                    return (
                                        <TableRow>
                                            <TableCell>{data.name}</TableCell>
                                            {
                                                data.height && <TableCell>{data.height}cm</TableCell>
                                            }
                                            <TableCell>&euro;{data.price}</TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Dialog>
        </>
    )
}

export default FigureModal;